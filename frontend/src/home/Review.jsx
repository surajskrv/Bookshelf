import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { FaStar } from 'react-icons/fa6';
import { Avatar } from "flowbite-react";
import avatar from "../assets/avatar.jpg";

import porfilePic2 from "../assets/sq_img(3).jpg";
import porfilePic3 from "../assets/sq_img(4).jpg";
import porfilePic4 from "../assets/sq_img(5).jpg";
import porfilePic5 from "../assets/sq_img(6).jpg";
import porfilePic6 from "../assets/sq_img(6).jpg";



const Review = () => {
  return (
    <div className="my-12 px-4 lg:px-24">
      <h2 className="text-5xl font-bold text-center md-10 leading-snug">
        Our Customers
      </h2>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 rounded-lg border">
            <div className="space-y-6">
                <div className="text-amber-400 flex gap-2">
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>

                {/*text*/}
                <div className="mt-7">
                    <p className="md-5">easiest 5 stars ever!!! it will be nearly IMPOSSIBLE for readers to not love this book. Kristin Hannah is BACK and she has done it again 👏🏼🙏🏼😭❤️
                    </p>
                    <Avatar img={avatar} alt="avatar" rounded  className="w-10 mb-4"/>
                    <h5 className="text-lg font-medium">John Doe</h5>
                    <p className="text-base ">
                      Doctor
                    </p>
                </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 rounded-lg border">
            <div className="space-y-6">
                <div className="text-amber-400 flex gap-2">
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>

                {/*text*/}
                <div className="mt-7">
                    <p className="md-5">Golden has hit pay dirt with this masterpiece. An insightful, curious, and caring look into the mysterious world of geisha, Arthur Golden peels away the ignorance and labeling that westerners have covered the secretive Japanese profession.</p>
                    <Avatar img={porfilePic2} alt="avatar" rounded  className="w-10 mb-4"/>
                    <h5 className="text-lg font-medium">Sam Smith</h5>
                    <p className="text-base ">
                      Actor
                    </p>
                </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 rounded-lg border">
            <div className="space-y-6">
                <div className="text-amber-400 flex gap-2">
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>

                {/*text*/}
                <div className="mt-7">
                    <p className="md-5">At the end of the book, I have more questions than when I started. Each of the geisha could have had their own book, and I felt that some of the characters were left a bit unfinished such as Sayuri’s sister.
                    </p>
                    <Avatar img={porfilePic3} alt="avatar" rounded  className="w-10 mb-4"/>
                    <h5 className="text-lg font-medium">Sally</h5>
                    <p className="text-base ">
                      Nurse
                    </p>
                </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 rounded-lg border">
            <div className="space-y-6">
                <div className="text-amber-400 flex gap-2">
                    <FaStar/>
                    <FaStar/>
                </div>

                {/*text*/}
                <div className="mt-7">
                    <p className="md-5">Memoirs of a Geisha is this month’s May Readalong, and I have mixed feelings about this book. First, the pace is really slow. Usually, this is a detriment, but it is perfect for reading this over a month and having in-depth discussions.</p>
                    <Avatar img={porfilePic4} alt="avatar" rounded  className="w-10 mb-4"/>
                    <h5 className="text-lg font-medium">Joe</h5>
                    <p className="text-base ">
                      Engineer
                    </p>
                </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 rounded-lg border">
            <div className="space-y-6">
                <div className="text-amber-400 flex gap-2">
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>

                {/*text*/}
                <div className="mt-7">
                    <p className="md-5">Of course, this made ‘freedom of choice’ a bit of a joke. You can’t really have ‘freedom’ if your choice is also based on your being ‘free’ from vital information.</p>
                    <Avatar img={porfilePic5} alt="avatar" rounded  className="w-10 mb-4"/>
                    <h5 className="text-lg font-medium">Neon</h5>
                    <p className="text-base ">
                      Developer
                    </p>
                </div>
            </div>
          </SwiperSlide>
          
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 rounded-lg border">
            <div className="space-y-6">
                <div className="text-amber-400 flex gap-2">
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>

                {/*text*/}
                <div className="mt-7">
                    <p className="md-5">This one took me longer to read that is reasonable for a book of its length or the clear style it is written in. I mean, such a simply written text of 250 pages ought to have finished in no time.</p>
                    <Avatar img={porfilePic6} alt="avatar" rounded  className="w-10 mb-4"/>
                    <h5 className="text-lg font-medium">Neo</h5>
                    <p className="text-base ">
                      Singer
                    </p>
                </div>
            </div>
          </SwiperSlide>


        </Swiper>
      </div>
    </div>
  );
};

export default Review;
