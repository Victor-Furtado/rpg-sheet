import { talents } from '@/data.json';

interface ISheet {
  talents: { [name: string]: number };
  verbs: { [name: string]: boolean };
  bequests: Array<string>;
  accomplishments: Array<string>;
}

const useSheet = () => {
  const sheet = ref<ISheet>({
    talents: Object.keys(talents).reduce(
      (t, v) => ({
        ...t,
        [v]: 0,
      }),
      {}
    ),
    verbs: Object.entries(talents).reduce(
      (t, [k, v]) => ({
        ...t,
        [k]: Object.keys(v.verbs).reduce(
          (a, b) => ({
            ...a,
            [b]: false,
          }),
          {}
        ),
      }),
      {}
    ),
    bequests: [],
    accomplishments: [],
  });

  return { sheet };
};
export default useSheet;
