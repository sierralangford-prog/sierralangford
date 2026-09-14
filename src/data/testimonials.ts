export type Testimonial = {
  quote: string;
  name: string;
  title: string;
  context?: string;
  group: "Recommendations" | "Recognition at work";
};

export const testimonials: Testimonial[] = [
  {
    group: "Recommendations",
    quote:
      "I had the opportunity to work closely with Sierra during our time at CereCore, where I was in a sales role supported by marketing. Even early in her career, she stood out for her creativity, ambition, and ability to think outside the box in ways that made a real impact.\n\nShe played a key role in communications and was the driving force behind a highly successful, award winning podcast. What set her apart was not just the execution, but the vision. She consistently found innovative ways to engage audiences and elevate the brand. Her work did not just check a box; it created momentum and delivered meaningful results.\n\nBeyond her creativity, she made a genuine effort to understand the sales perspective. She asked smart questions, collaborated closely, and ensured her work aligned with what would actually resonate with prospects and support pipeline growth. That combination of strategic thinking and creativity is rare, especially at an early stage.\n\nShe is proactive, reliable, and brings a level of ownership that makes her a standout contributor. I would confidently recommend her to any team looking for a driven, imaginative marketer who is not afraid to challenge the status quo and deliver exceptional work. She is a ray of sunshine, whose positive attitude has a gravitational pull.",
    name: "Matt McCue",
    title: "Healthcare IT sales",
    context: "LinkedIn recommendation",
  },
  {
    group: "Recommendations",
    quote:
      "Sierra has what it takes. Name the employee engagement, communication, or production project, and she can do it.\n\nTo know her is to be amazed, amused, and impressed by her. I very much enjoyed working with her and would seize any opportunity to partner with her again. Trust her with important work to carry forward with continuity or ask her to imagine or reinvent, and she will deliver beyond the highest expectations.\n\nPeople are drawn to Sierra and for good reason. She is interesting herself and is interested in others, eager to understand a story and to find the right audience and medium for sharing it.\n\nSierra is delightful as a person and is a dependable professional with ambition and ability that make her entirely special.",
    name: "Angela Vaden",
    title: "Senior Communication Specialist, CereCore",
    context: "LinkedIn recommendation",
  },
  {
    group: "Recommendations",
    quote:
      "I recruited Sierra to join our team at CereCore/HCA Healthcare, and she has been such a great addition to our team. She has proven herself time and time again that she is up for any challenge and can adapt quickly to business needs. She always has a smile on her face and is so friendly and accommodating. I would hire her back to our team in a heartbeat. She will be an absolute asset to any future organization.",
    name: "Chris Chmelar",
    title: "Sr. Talent Acquisition, CereCore",
    context: "LinkedIn recommendation",
  },
  {
    group: "Recommendations",
    quote:
      "Every once in a while, you come across a person who leaves a mark, a very positive mark. Sierra is that person. From the start of working at CereCore, her enthusiastic personality and her passion were evident.\n\nAnd she pays attention to little details. I recall an occasion when I was going to take a redeye flight somewhere, and she even gave me a few chocolate covered coffee beans to help me. They were perfect.\n\nSierra is someone who will brighten any room she is in, any office she works in, and any occasion she attends. She is a remarkable person, and I am just glad that I got to work with her.",
    name: "Peyman Zand",
    title: "Chief Strategy Officer, CFCHE",
    context: "LinkedIn recommendation",
  },
  {
    group: "Recognition at work",
    quote:
      "Sierra, thank you for your ideas and efforts that enabled us to raise the bar at HIMSS this year. From coming in early and staying late to make sure the booth was taken care of to your on the spot interviews, that all made a positive difference.",
    name: "Phil Sobol",
    title: "Chief Commercial Officer",
  },
  {
    group: "Recognition at work",
    quote:
      "Sierra, I want to recognize your efforts in taking on the podcast. It is a key part of our brand credibility and our effort to showcase what leadership looks like in our industry. I can see some new momentum in recordings and can't wait to see what you'll do with upcoming episodes. I appreciate you leaning into your inner storyteller!",
    name: "Tanya Knight",
    title: "Sr. Director of Marketing",
  },
  {
    group: "Recognition at work",
    quote:
      "Sierra, thank you for your great idea and hard work on collecting video testimonials from our podcast recordings. Your efforts unlocked new possibilities for Connection and will be pivotal in our external initiatives.",
    name: "Tanya Knight",
    title: "Sr. Director of Marketing",
  },
  {
    group: "Recognition at work",
    quote:
      "Thank you for all of the work you have done with the Marketing Advocacy Group. I appreciate you helping me with editing, tone, and personalization.",
    name: "Janette Mamedova",
    title: "Sr. Analyst",
  },
  {
    group: "Recognition at work",
    quote:
      "Sierra, thank you for all the help with my Connection topic this quarter! I love the energy and creativity you bring to your assignments!",
    name: "Sam McInnis",
    title: "Director, Talent Delivery",
  },
  {
    group: "Recognition at work",
    quote: "You are a true gem and I absolutely love working with you!",
    name: "Angie Bates",
    title: "Director, Program Management",
  },
];

export const shortTestimonials = testimonials.filter((t) => t.quote.length < 260).slice(0, 3);
