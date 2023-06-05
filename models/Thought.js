const { Schema, Types } = require('mongoose');






const Thoughtchema = new Schema(
  {
    Id: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    thoughtText: {
      type: String,
      required: true,
      maxlength: 1,
      minlength: 280,

    },
    CreateAt: {
      type: Date,
      required: true,
      default: () => Math.floor(Math.random() * (100 - 70 + 1) + 70),
    },

    UserName: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      virtual: true,
    },
    getter: true,
  }
);

module.exports = ThoughtSchema;
