import LRU from 'lru-cache';

const cache = new LRU<string, any>({max: 100});

export default cache;
