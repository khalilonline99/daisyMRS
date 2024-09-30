import { login, signup } from './actions'

export default function LoginPage() {
  return (
    <form className='w-3/6 bg-slate-200 flex flex-col justify-center items-center m-auto rounded-md p-20'>
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" required />
      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" required />
      <div className='flex gap-2'>
        <button className='mt-6 p-2 bg-slate-400' formAction={login}>Login</button>
        <button className='mt-6 p-2 bg-slate-400' formAction={signup}>Sign up</button>
      </div>
    </form>
  )
}