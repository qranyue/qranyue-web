interface StorageValue<T> {
  e: number;
  v: T;
}

export const createLocalStore = (before = '', time = 0) => {
  return {
    /**
     * 获取缓存
     * @param name 内容名
     * @returns
     */
    get<T extends unknown = unknown>(name: string) {
      const l: StorageValue<T> | null = JSON.parse(localStorage.getItem(before + name) || 'null');
      if (!l) return l;
      if (l.e === 0) return l.v;
      if (l.e > Date.now()) return l.v;
      return null;
    },
    /**
     * 设置缓存
     * @param name 内容名
     * @param value 内容
     * @param expired 失效时间：ms
     */
    set(name: string, value: unknown, expired = time) {
      localStorage.setItem(before + name, JSON.stringify({ e: expired && expired + Date.now(), v: value }));
    },
    /**
     * 移除缓存
     * @param name 内容名
     */
    rm(name: string) {
      localStorage.removeItem(before + name);
    },
  };
};

/** 长效缓存 */
export const local = createLocalStore();

export const createSessionStore = (before = '') => {
  return {
    /**
     * 获取缓存
     * @param name 内容名
     * @returns
     */
    get<T extends unknown = unknown>(name: string) {
      const s: T | null = JSON.parse(sessionStorage.getItem(before + name) || 'null');
      return s;
    },
    /**
     * 设置缓存
     * @param name 内容名
     * @param value 内容
     */
    set(name: string, value: unknown) {
      sessionStorage.setItem(before + name, JSON.stringify(value));
    },
    /**
     * 移除缓存
     * @param name 内容名
     */
    rm(name: string) {
      localStorage.removeItem(before + name);
    },
  };
};

/** 临时缓存 */
export const sess = createSessionStore();
