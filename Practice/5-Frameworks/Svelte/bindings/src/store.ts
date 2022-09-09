import { derived, get, readable, writable } from 'svelte/store';

export const createCountStore = () => {
    const store = writable(0)
  const { subscribe, set, update } = store;

  const increment = () => {
    if (get(store) < 12) {
      update(n => (n < 12 ? n + 1 : n));
    }
  };
  return {
    subscribe: subscribe,
    increment: increment,
    decrement: () => update(x => x - 1),
    reset: () => set(0),
  };
};

export const countStore = createCountStore();
export const userStore = writable({ name: 'andy', age: 15 });
export const doubleStore = derived(countStore, $count => $count * 2);


export const lemoncodeMembersStore = readable([], set => {
    fetch('https://api.github.com/orgs/lemoncode/members')
      .then(response => response.json())
      .then(data => set(data));
  });
  
  
  export const createMembersStore = () => {
    const { set, subscribe, update } = writable([]);
  
    const getMembersByOrg = org => {
      fetch(`https://api.github.com/orgs/${org}/members`)
        .then(response => response.json())
        .then(data => set(data));
    };
  
    return {
      subscribe,
      getMembersByOrg,
    };
  };
  
  export const membersStore = createMembersStore();

export const timeStore = readable(new Date(), set => {
    const interval = setInterval(() => {
        set(new Date());
    }, 1000);
  return () => {
    clearInterval(interval);
  };
});

export const secondsStore = derived(timeStore, $time => $time.getSeconds());


// export const lemoncodeMembersStore = readable([], set => {
//   fetch('https://api.github.com/orgs/lemoncode/members')
//     .then(response => response.json())
//     .then(data => set(data));
// });
