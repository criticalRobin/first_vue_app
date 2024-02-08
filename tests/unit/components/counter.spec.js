import Counter from "@/components/Counter.vue";
import { shallowMount, mount } from "@vue/test-utils";

// describe es una función global de Jest que agrupa pruebas relacionadas
describe("Pruebas del Componente Counter", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Counter);
  });

  // test es otra función global de Jest que permite definir una prueba
  // test("Debe hacer match con el snapshot", () => {
  //   // shallowMount es una función de Vue Test Utils que monta un componente de manera superficial
  //   // Esto significa que no se montan los componentes hijos
  //   const wrapper = shallowMount(Counter);

  //   // expect es otra función global de Jest que permite hacer afirmaciones
  //   // .toMatchSnapshot() es un matcher de Jest que compara la salida actual con un snapshot previo
  //   // Un snapshot es una representación serializada del output de una prueba que se guarda en un archivo
  //   // En pruebas futuras, Jest compara la salida con el snapshot guardado
  //   // Si la salida coincide con el snapshot, la prueba pasa. Si no, la prueba falla
  //   expect(wrapper.html()).toMatchSnapshot();
  // });

  test("h2 debe tener el valor por defecto", () => {
    expect(wrapper.find("h2").exists()).toBeTruthy();

    const h2Values = wrapper.find("h2").text();

    expect(h2Values).toBe("Contador");
  });

  test("El valor del segundo tag p debe ser igual a 0", () => {
    // const pTags = wrapper.findAll("p");
    const value = wrapper.find('[data-testid="counter"]').text();

    expect(value).toBe("0");
  });

  test("Incrementar en 1 el valor del contador al hacer click en el botón y decrementar el contador", async () => {
    const [increaseButton, decreaseButton] = wrapper.findAll("button");

    for (let i = 0; i < 3; i++) {
      await increaseButton.trigger("click");
    }

    for (let i = 0; i < 2; i++) {
      await decreaseButton.trigger("click");
    }

    const value = wrapper.find('[data-testid="counter"').text();

    expect(value).toBe("1");
  });

  test("El valor por defecto de la property start debe ser 0", () => {
    const { start } = wrapper.props();

    const value = wrapper.find('[data-testid="counter"').text();

    expect(Number(value)).toBe(start);
  });

  test("EL title debe tener el texto que envie por la prop title", () => {
    const name = "Hola Mundo!!!";

    const wrapper = shallowMount(Counter, {
      props: {
        name,
      },
    });

    const nameValue = wrapper.find("h2").text();

    expect(nameValue).toBe(name);
  });
});
