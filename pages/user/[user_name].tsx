import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { SkeletonWrapper, PopMsg, UserCard } from "../../components";
//import { useUserStatus } from "../../hooks";
import { getData } from "../../request";
import { judgeUserExist } from "../../utils/lib";
import { UserInfo } from "../../types";
import { skeletonStyle } from "../../utils/consts";

/**
 * data param could be the data being passed by the SSR function.
 * @param data
 * @constructor
 */
interface UserProps {
  /**
   * data being passed by the SSR function.
   */
  data: UserInfo[];
}

const User = ({ data }: UserProps) => {
  const router = useRouter();
  const { user_name } = router.query;
  // const { status, value } = useUserStatus(data);
  // TODO: here you should already have the data from your SSR function.
  // If you look at the data from the fake API, some `username`s are using Uppercase such as:
  // "username": "Moriah.Stanton", "username": "Maxime_Nienow",
  // If someone visits: http://localhost:3000/user/maxime_nienow , this page should grab `maxime_nienow` and
  // print the user_name plus a text telling us the user_name was found on our API response (or not).
  // TIP: it's important that you use a case insensitive comparison. So maxime_nienow should be equals to Maxime_Nienow, etc.
  let existState = judgeUserExist(data, user_name);

  // TODO remember to add an extra block showing if the user_name was found or not.
  const renderInfo = () => {
    if (existState) {
      return <UserCard data={existState} />;
    } else {
      return <PopMsg msg={user_name} />;
    }
  };

  return (
    <SkeletonWrapper
      // isShow={status === "pending"}
      style={existState ? skeletonStyle.centered : skeletonStyle.default}
    >
      {renderInfo()}
    </SkeletonWrapper>
  );
};

// TODO: looks like here's a good place to add the server side rendering function
// The SSR function should also fetch data from our fake API https://jsonplaceholder.typicode.com/users/ (using GET)
// Maybe you should also pass the data to the Page?

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await getData<UserInfo>("users");
  return {
    props: {
      data: res,
    },
  };
};

export default User;
