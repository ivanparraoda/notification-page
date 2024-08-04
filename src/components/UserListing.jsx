import User from './User'
const UserListing = ({ data }) => {
  return (
    <main className='flex flex-col gap-6 '>
      {data.map((user, id) => (
        <User key={id} user={user} />
      ))}
    </main>
  )
}

export default UserListing
