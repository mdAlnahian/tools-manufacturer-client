import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user, loading] = useAuthState(auth);


    return (
      <div>
        <h2 className="text-2xl mb-4">
          Hi I am <span className='font-bold'>{user.displayName}</span>
        </h2>
        <h2 className="text-xl mb-2">
          This is my Email address : <span className='font-bold'>{user?.email}</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex vitae
          rerum unde error a ipsa sapiente dolores repellat quia nostrum
          consequuntur, accusamus sed aliquid neque dicta expedita eligendi.
          Porro eos sed magni, enim possimus incidunt. Nostrum pariatur dolores
          blanditiis vitae consectetur, quasi quod dicta animi nam libero
          voluptate numquam voluptatibus ex consequuntur reprehenderit facilis
          obcaecati quaerat rem possimus aspernatur amet, magnam est maxime.
          Atque eum repellat nulla, ex tenetur delectus dolorum praesentium
          minus modi assumenda error inventore veniam, earum molestias
          laboriosam excepturi, vel natus. Autem aut labore, deleniti tempora in
          dolor praesentium molestiae provident necessitatibus id mollitia, odit
          distinctio cupiditate?
        </p>
      </div>
    );
};

export default MyProfile;