import { talents, knacks } from '@/data.json';

interface ISheet {
  image: string,
  charName: string,
  player: string,
  concept: string,
  description: string,
  talents: { [name: string]: number };
  verbs: { [name: string]: boolean };
  knacks: Array<boolean>;
  bequests: Array<string>;
  accomplishments: Array<string>;
  savvy: Array<string>;
  tackles: Array<string>;
}

const useSheet = () => {

  const initialData = ()=> ({
    image: '',
    charName: '',
    player: '',
    concept: '',
    description: '',
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
    knacks: knacks.map(_=>false),
    bequests: [],
    accomplishments: [],
    savvy: [],
    tackles: [],
  })

  const sheet = reactive<ISheet>(initialData());

  const exportToJsonFile = () => {
    let dataStr = JSON.stringify(sheet);
    let dataUri =
      'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);

    let exportFileDefaultName =
      (sheet.charName || 'Personagem') + ' - ' + (sheet.concept || 'RPG') + '.json';

    let linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  const importFromJsonFile = ({ target }: any) => {
    let reader = new FileReader();
    reader.onloadend = (e) =>
      Object.assign(sheet,
        JSON.parse(
          atob(
            (e?.target?.result as string).replace(
              'data:application/json;base64,',
              ''
            )
          )
        )
      );
    reader.readAsDataURL(target.files[0]);
  };
  const resetSheet = () => Object.assign(sheet, initialData());

  return { sheet, resetSheet, exportToJsonFile, importFromJsonFile };
};
export default useSheet;
