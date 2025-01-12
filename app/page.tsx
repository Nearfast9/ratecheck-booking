'use client'
import type { NextPage } from 'next';
import { useState } from 'react';




  const Home: NextPage = () => {
  const [price, setPrice] = useState<number>(0);
  const [komisi, setKomisi] = useState<number>(0);
  const [room, setRoom] = useState<number>(0);
  const [night, setNight]= useState<number>(0);
  const [hasil, setHasil] = useState<number>(0);

  const handleSubmit = () => {
    setHasil((price - komisi) / room / night);

  };


  return (
    <>

<h1 className="text-3xl text-center py-4 font-extrabold font-sans text-[#23387E] hover:text-[#47A1DE]">Harga Booking.com</h1>
          <div className="items-center justify-center place-items-center">
              {/*FORM INPUT HARGA*/}
              <label htmlFor="price" className="block text-sm/6 font-medium text-gray-900">
                  Input Commissionable amount :
              </label>
                  <div className="mt-2">
                      <div className="max-w-[500px] flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                          <div className="shrink-0 select-none text-base text-gray-500 sm:text-sm/6">IDR</div>
                              <input 
                                  id="price"
                                  type="number"
                                  value={price}
                                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPrice(Number(e.target.value.replace(/[^0-9]/g,'')))}
                                  className="block max-w-[500px] grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                              />
                                  <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                                      <div
                                      id="price"
                                      aria-label="price"
                                      className="col-start-1 row-start-1 w-full appearance-none rounded-md py-1.5 pl-3 pr-7 text-base text-gray-500 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                      >
                                      <p>Tanpa Komisi</p>
                                      </div>
                                  </div>
                      </div>
                  </div>
                  {/*FORM INPUT KOMISI*/}
              <label htmlFor="komisi" className="block text-sm/6 font-medium text-gray-900">
                  Input Commission and charges :
              </label>
                  <div className="mt-2">
                      <div className="max-w-[500px] flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                          <div className="shrink-0 select-none text-base text-gray-500 sm:text-sm/6">IDR</div>
                              <input 
                                  id="komisi"
                                  name="komisi"
                                  type="number"
                                  value={komisi}
                                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setKomisi(Number(e.target.value.replace(/[^0-9]/g,'')))}
                                  placeholder="0.00"
                                  className="block max-w-[500px] grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                              />
                                  <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                                      <div
                                      id="komisi"
                                      aria-label="komisi"
                                      className="col-start-1 row-start-1 w-full appearance-none rounded-md py-1.5 pl-3 pr-7 text-base text-gray-500 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                      >
                                      <p>Total Komisi</p>
                                      </div>
                                  </div>
                      </div>
                  </div>
                  {/*FORM INPUT ROOM*/}
                  <label htmlFor="night" className="block text-sm/6 font-medium text-gray-900 mt-5">
                      Total Kamar :
                  </label>
                      <div className="mt-2">
                          <div className="max-w-[500px] flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                              <div className="shrink-0 select-none text-base text-gray-500 sm:text-sm/6">Room</div>
                                  <input 
                                      id="room"
                                      name="room"
                                      type="number"
                                      value={room}
                                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRoom(Number(e.target.value.replace(/[^0-9]/g,'')))}
                                      placeholder="0"
                                      className="block max-w-[500px] grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                                  />
                                      <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                                          <div
                                          id="room"
                                          aria-label="room"
                                          className="col-start-1 row-start-1 w-full appearance-none rounded-md py-1.5 pl-3 pr-7 text-base text-gray-500 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                          >
                                          <p>Total Room</p>
                                          </div>
                                      </div>
                              </div>
                      </div>
                  {/*FORM INPUT MALAM*/}
                  <label htmlFor="night" className="block text-sm/6 font-medium text-gray-900 mt-5">
                      Total Malam :
                  </label>
                      <div className="mt-2">
                          <div className="max-w-[500px] flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                              <div className="shrink-0 select-none text-base text-gray-500 sm:text-sm/6">Night</div>
                                  <input 
                                      id="night"
                                      name="night"
                                      value={night}
                                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNight(Number(e.target.value.replace(/[^0-9]/g,'')))}
                                      type="number"
                                      placeholder="0"
                                      className="block max-w-[500px] grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                                  />
                                      <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                                          <div
                                          id="night"
                                          aria-label="night"
                                          className="col-start-1 row-start-1 w-full appearance-none rounded-md py-1.5 pl-3 pr-7 text-base text-gray-500 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                          >
                                          <p>Total Stay</p>
                                          </div>
                                      </div>
                              </div>
                      </div>
                      <div className="tombol bg-[#36181A] hover:bg-[#C29C5D] rounded-full w-1/6 text-center mt-5 mb-5">
                      <button type="submit" className="text-center text-white font-bold" onClick={handleSubmit}>Submit</button>
                      </div>
                      {/*FORM INPUT HASIL*/}
              <label htmlFor="hasil" className="font-bold text-sm/6  text-gray-900">
                  Total Rate :
              </label>
                  <div className="mt-2 mb-20">
                      <div className="max-w-[500px] flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                          <div className="font-bold shrink-0 select-none text-base text-gray-500 sm:text-sm/6">IDR</div>
                              <p 
                                  id="hasil"
                                  className="font-bold max-w-[500px] grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                              > {hasil}</p>
                                  <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                                      <div
                                      id="hasil"
                                      aria-label="hasil"
                                      className="font-bold col-start-1 row-start-1 w-full appearance-none rounded-md py-1.5 pl-3 pr-7 text-base text-gray-500 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                      >
                                      <p>Total Rate</p>
                                      </div>
                                  </div>
                      </div>
                  </div>
          </div>

          <footer className='bg-[#36181A]'>
    <div className="copyright font-light text-sm text-[#eaeaea]">
      &copy; Copyright © 2025. Created by Rein Hard Cavin Bawimbang
      </div>
</footer>

    </>
  );
};

export default Home;