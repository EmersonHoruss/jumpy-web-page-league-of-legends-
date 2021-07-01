export const extra = {
  hasScript(word) {
    return word.includes("-");
  },
  convertScriptSlash(word) {
    return word.replaceAll("-", "/");
  },
};
