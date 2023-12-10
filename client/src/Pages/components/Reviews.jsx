import React from "react";
import { BsStarFill } from "react-icons/bs";
import { requireAuth } from "../../utils";
import reviewImg from "../../assets/images/reviews-graph.png";


export async function loader({ request }) {
  return await requireAuth(request);
}

function Reviews() {
  const reviewsData = [
    {
      rating: 5,
      name: "Elliot",
      date: "January 3, 2023",
      text: "The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
      id: "1",
    },
    {
      rating: 5,
      name: "Sandy",
      date: "December 12, 2022",
      text: "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!",
      id: "2",
    },
  ];
  return (
    <div className="bg-[#FFF7ED] flex justify-center items-start px-6 sm:px-16 min-h-[100vh]">
      <div className="w-full xl:max-w-[1280px] mt-[150px]">
        <section className="host-reviews">
          <div className="top-text">
            <h2>Your reviews</h2>
            <p>
              Last <span>30 days</span>
            </p>
          </div>
          <img
            className="graph"
            src={reviewImg}
            alt="Review graph"
          />
          <h3>Reviews (2)</h3>
          {reviewsData.map((review) => (
            <div key={review.id}>
              <div className="review">
                <div className="flex">
                {[...Array(review.rating)].map((_, i) => (
                  <BsStarFill className="review-star" key={i} />
                ))}
                </div>
                <div className="info">
                  <p className="name">{review.name}</p>
                  <p className="date">{review.date}</p>
                </div>
                <p>{review.text}</p>
              </div>
              <hr />
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

export default Reviews;
