const ISI_PATTERN = /^(.|null)?((?<key>[0-9A-Z]{2})| {2})( (?<value>.+))?$/;

const hellotsdx = (content: string): boolean => {
  for (let line of content.split('\n')) {
    const match = line.match(ISI_PATTERN);
    if (!match) {
      return false;
    }
  }
  return true;
};

export { ISI_PATTERN };
export default hellotsdx;
