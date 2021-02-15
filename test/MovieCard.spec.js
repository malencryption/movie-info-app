import { mount } from "@vue/test-utils";
import Movie from "@/components/Movies/Movie.vue";

describe("Movie", () => {
  test("is a Vue instance", () => {
    const wrapper = mount(Movie);
    expect(wrapper.vm).toBeTruthy();
  });
});
