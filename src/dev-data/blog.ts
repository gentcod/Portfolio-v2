type FeaturedImagesProp = {
   id: number;
   link: string;
   title: string;
   summary: string;
   imgSrc: string;
}[]

// TODO: Handle scroll into view event

export const data: FeaturedImagesProp = [
   {
      id: 0,
      link: 'https://medium.com/@gentcod/its-never-too-late-to-build-an-habit-6591f3794914',
      title: "It’s never too late to build an habit",
      summary: "Hello everyone, Today I’d be writing about something different from programming. It’s going to be a series actually, I really don’t know if I’d sustain this or keep up with it but I’m doing this to work on myself and what better way to do that than to not necessarily engage an audience but to share an experience, hopefully it helps.",
      imgSrc: 'https://res.cloudinary.com/douvgvdla/image/upload/v1730168700/habit_ddd3ls.jpg',
   },
   {
      id: 1,
      link: 'https://medium.com/@gentcod/it-is-never-too-late-to-build-an-habit-take-2-94010fcf6d77',
      title: "It is never too late to build an habit — What type of player are you?",
      summary: "Hello everyone, This marks the second writing for the series. I still don’t know how long I’d continue this but I have made a little progress. I learnt something new or rather I realized something I had not been conscious about.",
      imgSrc: 'https://res.cloudinary.com/douvgvdla/image/upload/v1730168701/habit-player_rdsiz7.jpg',
   },
   {
      id: 2,
      link: 'https://medium.com/@gentcod/today-with-redux-i-learnt-21477b6e1f36',
      title: "Today with Redux I learnt",
      summary: "Hello everyone, It has been a really long time since I wrote, been considering it but I keep changing my mind. The past week, a couple of people around me have been sharing stories about their tech journeys and I decided, oh well, guess that was the inspiration I was looking for, so why not today 😅😅😅.",
      imgSrc: 'https://res.cloudinary.com/douvgvdla/image/upload/v1730168697/redux_cvcvbc.jpg',
   }, 
   {
      id: 3,
      link: 'https://medium.com/@gentcod/the-major-difference-between-web2-and-web3-eff9c9825409',
      title: "The Major Difference between Web2 and Web3",
      summary: "The internet as we know it today is dominated by companies that provide services in exchange for your personal data. The new iteration of the web will enable anyone to monetize their personal data. Web 2.0 and Web 3.0 represent successive iterations of the original version of Web 1.0. Web 2.0 is the World Wide Web as we know it today or the web that we are familiar with. Web 3.0 represents the next phase that will be decentralized, open and of greater utility.",
      imgSrc: 'https://res.cloudinary.com/douvgvdla/image/upload/v1730168689/web3_jfdpnl.jpg',
   },  
   {
      id: 4,
      link: 'https://tealfeed.com/when-not-programming-coding-1d16q',
      title: "What do you do when you are not programming <coding>???",
      summary: "Helpful activities to engage in when you are not programming.",
      imgSrc: 'https://res.cloudinary.com/douvgvdla/image/upload/v1730171411/productivity_wv9iev.jpg',
   },
   {
      id: 5,
      link: 'https://leetcode.com/problems/top-k-frequent-elements/solutions/5919946/top-k-frequent-elements-using-hashmap-and-heap',
      title: "Top K Frequent Elements - Using HashMap and Heap",
      summary: "First count how frequently each number appears in the input array (nums). Then, group the numbers by their frequencies using a frequency bucket array, where each index represents a frequency and contains the numbers with that frequency. Finally, the result is built by starting from the highest frequency bucket and collecting numbers until the top k most frequent elements are found.",
      imgSrc: 'https://res.cloudinary.com/douvgvdla/image/upload/v1730170774/leetcode_owsj5o.png',
   },
   {
      id: 6,
      link: 'https://leetcode.com/problems/integer-to-roman/solutions/5965101/intuitive-o-1-constant-time-solution',
      title: "Integer to Roman Numerals - Intuitive O(1) Constant Time Solution",
      summary: "Using an HashMap and mathematical logic",
      imgSrc: 'https://res.cloudinary.com/douvgvdla/image/upload/v1730170774/leetcode_owsj5o.png',
   }, 
   {
      id: 7,
      link: 'https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/solutions/6139266/using-straightforward-two-sum-approach-b-bxzj/',
      title: "Two Sum II - Using straightforward Two Sum approach - Beats 100%",
      summary: "This is basically a two sum problem and it can be solved using the approach for two sum, only difference is the indexing",
      imgSrc: 'https://res.cloudinary.com/douvgvdla/image/upload/v1730170774/leetcode_owsj5o.png',
   }, 
   {
      id: 8,
      link: 'https://leetcode.com/problems/zigzag-conversion/solutions/6238567/intuitive-straightforward-0n-approach-by-qxz5/',
      title: "Zigzag Conversion - Intuitive Straightforward 0(n) Approach.",
      summary: "Using number of rows and number of steps as a reference, increment sequentially.",
      imgSrc: 'https://res.cloudinary.com/douvgvdla/image/upload/v1730170774/leetcode_owsj5o.png',
   }, 
   {
      id: 9,
      link: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/solutions/6152289/straightforward-sliding-window-and-hashm-i4a2/',
      title: "Longest Substring Without Repeating Characters - Straightforward Sliding Window and Hashmap",
      summary: "Using sliding window and hashmap",
      imgSrc: 'https://res.cloudinary.com/douvgvdla/image/upload/v1730170774/leetcode_owsj5o.png',
   }, 
];