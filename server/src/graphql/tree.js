import { verifyAuth } from "../utils/auth";
import { treedb } from "../models/tree";

export const TreeResolver = {
  Query: {
    getTree: async (_, { treeId }) => {
      try {
        const currentTree = await treedb.find({ treeId: treeId });
        return currentTree;
      } catch (error) {
        console.log(error);
      }
    },
  },
  Mutation: {
    async createTree(
      _,
      { tree: { id, value, price, username, parent, treeId } },
      context
    ) {
      if (value.trim() === "") {
        throw new Error("Input field is empty");
      }

      const user = verifyAuth(context);

      const trees = await treedb.find({ treeId: treeId }).lean();
      const parentEl = await treedb.findOne({ id: parent });
      let newTree;
      if (trees.length === 0) {
        newTree = new treedb({
          id,
          value,
          price,
          username,
          parent,
          treeId,
          username: user.username,
        });
      } else {
        const newAncestors = [...parentEl.ancestors, parent];
        newTree = new treedb({
          id,
          value,
          price,
          username,
          parent,
          treeId,
          ancestors: newAncestors,
          username: user.username,
        });
      }
      const tree = await newTree.save();

      context.pubsub.publish("NEW_NODE", {
        newNode: tree,
      });
      return tree;
    },
    async setPrice(_, { pricing: { id, price } }) {
      const doc = await treedb.findOne({ id: id });

      const updateArr = [...doc.ancestors, id];

      try {
        updateArr.forEach(async (i) => {
          await treedb.updateOne({ id: i }, { $inc: { price: price } });
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
  Subscription: {
    newNode: {
      subscribe: (_, __, { pubsub }) => pubsub.asyncIterator("NEW_NODE"),
    },
  },
};
