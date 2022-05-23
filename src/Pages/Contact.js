import React from 'react';


const Contact = () => {
    return (
      <div class="hero h-auto bg-orange-100 py-24">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="text-center lg:text-left">
            <h1 class="lg:text-5xl text-3xl font-bold">Message Us Now!!</h1>
            <p class="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div class="card-body">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Email"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Message</span>
                </label>
                {/* <input
                  type="text"
                  placeholder="Message"
                  class="input input-bordered"
                /> */}
                <textarea
                 className='border-2 rounded'
                  name=""
                  id=""
                  cols="30"
                  rows="3"
                  type="text"
                  placeholder="Message"
                ></textarea>
              </div>
              <div class="form-control mt-6">
                <button class="btn btn-primary">Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Contact;