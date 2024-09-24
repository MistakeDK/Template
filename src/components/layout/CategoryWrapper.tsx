import { Category } from "./Category";
import { categoryState } from "./ILayout";
import { SearchInput } from "./SearchInput";
import { TabWrapper } from "./TabWrapper";
// const useViewState = create<viewState>((set)=>({
//   categoryOpen:[],
//   pushIndex:(index:number)=>set({categoryOpen:[]}),
//   removeAll:()=>set({categoryOpen:[]}),
//   removeIndex:()=>
// }));
export const CategoryWrapper = () => {
  const [arrCategory, setArrCategory] = useState<categoryState[]>([]);
  useEffect(() => {
    const callApi = async () => {
      const data = await fetchFakeArrCategory();
      setArrCategory(data as categoryState[]);
    };
    callApi();
  }, []);
  //call Api here
  return (
    <div className="w-2/5 m-4">
      <TabWrapper />
      <SearchInput />
      {arrCategory.map((item) => {
        return <Category category={item} />;
      })}
    </div>
  );
};
