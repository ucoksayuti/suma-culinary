const UrlParser = {
  parseActiveUrlWithCombiner() {
    const splitUrl = this._getSplitUrl();
    return this._urlCombiner(splitUrl);
  },

  parseActiveUrlWithoutCombiner() {
    return this._getSplitUrl();
  },

  _getSplitUrl() {
    const url = window.location.hash.slice(1).toLowerCase();
    return this._urlSplitter(url);
  },

  _urlSplitter(url) {
    const [_, resource, id, verb] = url.split('/');
    return {
      resource: resource || null,
      id: id || null,
      verb: verb || null,
    };
  },

  _urlCombiner({ resource, id, verb }) {
    return (resource ? `/${resource}` : '/')
         + (id ? '/:id' : '')
         + (verb ? `/${verb}` : '');
  },
};

export default UrlParser;
