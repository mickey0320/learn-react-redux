class Subscription {
  constructor(store) {
    this.store = store;
    this.listeners = [];
    store.subscribe(() => {
      this.notify();
    });
  }
  addSubscribe(listener) {
    this.listeners.push(listener);
  }
  notify() {
    for (let l of this.listeners) {
      l();
    }
  }
}

export default Subscription;
