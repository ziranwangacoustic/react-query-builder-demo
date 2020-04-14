function request(...args) {
  return fetch(...args).then(res => {
    const json = res.text().then(text => (text ? JSON.parse(text) : {}));
    return res.ok ? json : json.then(Promise.reject.bind(Promise));
  });
}

export default request;
