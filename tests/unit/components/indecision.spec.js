import Indecision from "@/components/Indecision.vue";
import { shallowMount } from "@vue/test-utils";

describe("Pruebas del componente Indecision", () => {
  let wrapper;
  let clgSpy;

  beforeEach(() => {
    wrapper = shallowMount(Indecision);
    clgSpy = jest.spyOn(console, "log");

    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            answer: "yes",
            forced: false,
            image:
              "https://yesno.wtf/assets/yes/4-c53643ecec77153eefb461e053fb4947.gif",
          }),
      })
    );

    jest.clearAllMocks();
  });

  test("El componente debe ser igual al snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("Escribir en el input no debe disparar nada (console.log)", async () => {
    //vm es el objeto que contiene todos los metodos y propiedades del componente
    const getAnswerSpy = jest.spyOn(wrapper.vm, "getAnswer");
    const input = wrapper.find("input");
    await input.setValue("Hobis Mundo!!!");

    expect(clgSpy).toHaveBeenCalledTimes(1);
    expect(getAnswerSpy).not.toHaveBeenCalled();
  });

  test("Escribir el simbolo de '?' debe disparar el getAnswer", async () => {
    const getAnswerSpy = jest.spyOn(wrapper.vm, "getAnswer");
    const input = wrapper.find("input");
    await input.setValue("Tas aqui?");

    expect(getAnswerSpy).toHaveBeenCalled();
  });

  test("Pruebas en el getAnswer", async () => {
    await wrapper.vm.getAnswer();

    const image = wrapper.find("img");

    expect(image.exists()).toBeTruthy();
    expect(wrapper.vm.answer).toBe("Sí");
  });

  test("Pruebas en el getAnswer - Fallo del API", async () => {
    fetch.mockImplementationOnce(() => Promise.reject());

    await wrapper.vm.getAnswer();

    const image = wrapper.find("img");

    expect(image.exists()).toBeFalsy();
    expect(wrapper.vm.answer).toBe("Error al obtener la respuesta");
  });
});
