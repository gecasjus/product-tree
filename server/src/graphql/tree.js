import { verifyAuth } from "../utils/auth";
import { unwind } from "../utils/unwind";
import { treedb } from "../models/tree";

export const TreeResolver = {
  Query: {
    getTree: async () => {
      try {
        const currentTree = await treedb.find();
        return currentTree;
      } catch (error) {
        console.log(error);
      }
    },
  },
  Mutation: {
    async createTree(_, { tree: args }, context) {
      const user = verifyAuth(context);

      const newTree = new treedb({
        ...args,
        username: user.username,
      });

      const tree = await newTree.save();

      return tree;
    },
    async createNode(_, { node: { id, parent, value, price, tree } }) {
      const newNode = { id, value, price, parent };

      new Promise((resolve, reject) => {
        const currentTree = treedb.find({ id: tree }).lean();
        resolve(currentTree);
      })
        .then((res) => {
          const flat = unwind(res);
          const base = {
            username: res[0].username,
            price: res[0].price,
            value: res[0].value,
            id: res[0].id,
            parent: res[0].parent,
          };
          flat.push(base, newNode);
          let main;
          const idMapping = flat.reduce((acc, el, i) => {
            acc[el.id] = i;
            return acc;
          }, {});
          flat.forEach((el) => {
            if (el.parent === null) {
              main = el;
              return;
            }
            // Use our mapping to locate the parent element in our data array
            const parentEl = flat[idMapping[el.parent]];
            // Add our current el to its parent's `children` array
            parentEl.children = [...(parentEl.children || []), el];
          });
          const updatedTree = treedb.replaceOne({ id: tree }, main, {
            upsert: true,
          });
          return updatedTree;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
