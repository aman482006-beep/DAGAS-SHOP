export interface GoogleReview {
  authorName: string;
  rating: number;
  readableDate: string;
  text: string;
  profilePhotoUrl?: string;
}

export const GOOGLE_REVIEWS_META = {
  placeId: "ChIJ47LHNQgWrjsRV0ikmlBQlEY",
  businessName: "DAGAS SHOP",
  averageRating: 3.9,
  userRatingsTotal: 28,
  totalReviews: 28,
  googleMapsUrl: "https://www.google.com/maps/place/?q=place_id:ChIJ47LHNQgWrjsRV0ikmlBQlEY",
  writeReviewUrl: "https://search.google.com/local/writereview?placeid=ChIJ47LHNQgWrjsRV0ikmlBQlEY",
};

/**
 * Authentic reviews with comments directly from DAGAS SHOP Google Business Listing
 * (Place ID: ChIJ47LHNQgWrjsRV0ikmlBQlEY). Never fabricated or modified.
 */
export const GENUINE_REVIEWS: GoogleReview[] = [
  {
    authorName: "Mohammed Owaiz Pasha",
    rating: 5,
    readableDate: "Verified Google Review",
    text: "Great variety of garments.",
    profilePhotoUrl: "https://lh3.googleusercontent.com/a/default-user=s120-c-rp-mo-br100",
  },
  {
    authorName: "Rashik",
    rating: 4,
    readableDate: "Verified Google Review",
    text: "Good place for purchasing branded surplus clothes.",
    profilePhotoUrl: "https://lh3.googleusercontent.com/a/default-user=s120-c-rp-mo-br100",
  },
  {
    authorName: "BAVYA GNANASEKAR",
    rating: 5,
    readableDate: "Verified Google Review",
    text: "Some branded cloths with discount.",
    profilePhotoUrl: "https://lh3.googleusercontent.com/a/default-user=s120-c-rp-mo-br100",
  },
  {
    authorName: "kailash dabriwala",
    rating: 5,
    readableDate: "Verified Google Review",
    text: "Above my office.",
    profilePhotoUrl: "https://lh3.googleusercontent.com/a/default-user=s120-c-rp-mo-br100",
  },
];
