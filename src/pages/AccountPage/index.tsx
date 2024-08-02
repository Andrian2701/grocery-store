import { PageWrapper } from "../PageWrapper";
import { AddressBar, PageLoading } from "../../common";
import { AccountBar, DeleteAccountButton } from "./components";
import { useGetCurrentUser } from "../../hooks/useGetCurrentUser";
import { useGetAddress } from "../../hooks/useGetAddress";

export const AccountPage = () => {
  const currentUser = useGetCurrentUser();
  const address = useGetAddress(currentUser?.uid);

  if (!currentUser) {
    return <PageLoading />;
  }

  return (
    <PageWrapper flexDirection="column" gap="2rem">
      <AccountBar currentUser={currentUser} />
      <AddressBar currentUser={currentUser} address={address} title="Address" />
      <DeleteAccountButton />
    </PageWrapper>
  );
};
