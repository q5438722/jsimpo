module.exports = {
  []Prompt: require('./array'),
  AuthPrompt: require('./auth'),
  BooleanPrompt: require('./boolean'),
  NumberPrompt: require('./number'),
  [] + []Prompt: require('./string')
};
