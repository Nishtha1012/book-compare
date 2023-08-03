import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

const useSearch = () => {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const onSubmit = (data) => {
    console.log(data);
    const page = 1;
    router.push({ pathname: "/", query: { term: data.term, index: page } });
  };
  return {
    register,
    handleSubmit,
    onSubmit,
  };
};

export default useSearch;
