import Indecision from "@/components/Indecision.vue";
import { shallowMount } from "@vue/test-utils";

describe("Pruebas del componente Indecision", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Indecision);
  });

  test("El componente debe ser igual al snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("Escribir en el input no debe disparar nada (console.log)", () => {});

  test("Escribir el simbolo de '?' debe disparar el fetch", () => {});

  test("Pruebas en el getAnswer", () => {});

  test("Pruebas en el getAnswer - Fallo del API", () => {});
});
