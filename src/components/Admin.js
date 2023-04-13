import {
  useAddAccountMutation,
  useDeleteAccountMutation,
  useGetAccountsQuery,
  useUpdateAccountMutation,
} from '../api/adminSlice';

const Admin = () => {
  const { data, error, isLoading, isSuccess } = useGetAccountsQuery();
  const [addAccount] = useAddAccountMutation();
  const [deleteAccount] = useDeleteAccountMutation();
  const [updateAccount] = useUpdateAccountMutation();

  return (
    <div>
      <h3 style={{ color: 'red' }}>
        <b>Admin Component</b>
      </h3>
      {isLoading && <p>Loading</p>}
      {isSuccess &&
        data &&
        data.map((account) => (
          <>
            <p>
              {account.id}: {account.amount}
              <button onClick={() => deleteAccount(account.id)}>
                Delete Account
              </button>
              <button
                onClick={() => updateAccount({ id: account.id, amount: 500 })}
              >
                Update Account
              </button>
            </p>
          </>
        ))}
      <button onClick={() => addAccount({ id: data.length + 1, amount: 1010 })}>
        Add Account
      </button>
    </div>
  );
};

export default Admin;
