import Indecision from "@/components/Indecision.vue";
import { shallowMount } from "@vue/test-utils";

describe("Pruebas del componente Indecision", () => {
  let wrapper;
  let clgSpy;

  beforeEach(() => {
    wrapper = shallowMount(Indecision);
    clgSpy = jest.spyOn(console, "log");
  });

  test("El componente debe ser igual al snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("Escribir en el input no debe disparar nada (console.log)", async () => {
    //vm es el objeto que contiene todos los metodos y propiedades del componente
    const getAnwerSpy = jest.spyOn(wrapper.vm, "getAnswer");
    const input = wrapper.find("input");
    await input.setValue("Hobis Mundo!!!");

    expect(clgSpy).toHaveBeenCalledTimes(1);
    expect(getAnwerSpy).not.toHaveBeenCalled();
  });

  test("Escribir el simbolo de '?' debe disparar el fetch", () => {});

  test("Pruebas en el getAnswer", () => {});

  test("Pruebas en el getAnswer - Fallo del API", () => {});
});
