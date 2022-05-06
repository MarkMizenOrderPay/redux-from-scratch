// TODO: code for subscribing to store to display current count

import counterStore from "../store/counter";

const count = document.getElementById("count")!;

counterStore.subscribe((state) => {
    count.innerText = state.count.toString();
})