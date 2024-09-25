import { Category } from "./Category";
import { categoryState } from "./ILayout";
export const CategoryWrapper = () => {
  const [arrCategory, setArrCategory] = useState<categoryState[]>([]);
  useEffect(() => {
    const callApi = async () => {
      const data = await fetchFakeArrCategory();
      setArrCategory(data as categoryState[]);
    };
    callApi();
  }, []);
  return (
    <div className="w-full">
      {arrCategory.map((item) => {
        return <Category category={item} />;
      })}
    </div>
  );
};
