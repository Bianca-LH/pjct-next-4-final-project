'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { LoginResponseBodyPost } from '../../../api/(auth)/login/route';
import { getSafeReturnToPath } from '../../../utils/validation';

export default function LoginForm(props: { returnTo?: string | string[] }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ message: string }[]>([]);
  const router = useRouter();

  return (
    <form
      onSubmit={async (event) => {
        event.preventDefault();

        const response = await fetch('/api/login', {
          method: 'POST',
          body: JSON.stringify({ username, password }),
        });

        const data: LoginResponseBodyPost = await response.json();

        if ('errors' in data) {
          setErrors(data.errors);
          return;
        }

        const returnTo = getSafeReturnToPath(props.returnTo);

        if (returnTo) {
          router.push(returnTo);
          return;
        }

        router.replace(`/profile/${data.user.username}`);
        router.refresh();
      }}
    >
      {errors.map((error) => (
        <div key={`error-${error.message}`}>Error: {error.message}</div>
      ))}
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <span>
              <h1 className="text-5xl font-bold">Log in now!</h1>
              <p className="py-6">
                Please log in to see more of your favorite art.
              </p>
            </span>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label>
                  <span className="label-text">Username</span>
                  <input
                    className="input input-bordered input-md w-full max-w-xs"
                    value={username}
                    onChange={(event) => setUsername(event.currentTarget.value)}
                  />
                </label>
                {/* <input
                  type="text"
                  placeholder="username"
                  className="input input-bordered"
                /> */}
              </div>
              <div className="form-control">
                {/* <label className="label">
                  <span className="label-text">Password</span>
                </label> */}
                <label>
                  <span className="label-text">Password</span>
                  <input
                    className="input input-bordered input-md w-full max-w-xs"
                    value={password}
                    onChange={(event) => setPassword(event.currentTarget.value)}
                  />
                </label>
                {/* <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label> */}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Log in</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <label>
        Username:
        <input
          className="input input-bordered input-md w-full max-w-xs"
          value={username}
          onChange={(event) => setUsername(event.currentTarget.value)}
        />
      </label>
      <label>
        Password:
        <input
          className="input input-bordered input-md w-full max-w-xs"
          value={password}
          onChange={(event) => setPassword(event.currentTarget.value)}
        />
      </label> */}
      {/* <button className="btn btn-outline btn-primary">Login</button> */}
    </form>
  );
}
