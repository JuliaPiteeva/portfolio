import login from "./login.vue";
import { shallowMount, createLocalVue } from "@vue/test-utils"; //монтирует целостный компонент
import Vuex from "vuex";
const localVue = createLocalVue();

localVue.use(Vuex);

//работает исправно
describe("На странице есть кнопка Отправить", () => {
  it("Ищем кнопку по классу", () => {
    const wrapper = shallowMount(login);
    const button = wrapper.find(".authorization-btn");

    expect(button.element).toMatchSnapshot();
  });
  it("Ищем кнопку по слову Отправить", () => {
    const wrapper = shallowMount(login);
    const button = wrapper.find("button");

    expect(button.text()).toBe("Отправить");
  });
});
//не фэйлид
describe("при клике на кнопку авторизации появляется форма", () => {
  it("Форма открывается при клике", async () => {
    const wrapper = shallowMount(login);
    const form = wrapper.find(".authorization");
    const openBtn = wrapper.find(".login__btn");

    openBtn.trigger("click");
    await wrapper.vm.$nextTick();
    expect(form.element).toMatchSnapshot();
  });
});
//не фэйлид
describe("форма имеет все необходимые поля", () => {
  it("есть поле логин", () => {
    const wrapper = shallowMount(login);
    const inputLogin = wrapper.find(".login-input");

    expect(inputLogin.element).toMatchSnapshot();
  });
  it("есть поле пароль", () => {
    const wrapper = shallowMount(login);
    const inputPass = wrapper.find(".password-input");

    expect(inputPass.element).toMatchSnapshot();
  });
});

describe("кнопка “Отправить” заблокирована до тех пор, пока не введены все данные", () => {
  let actions;
  let store;
  beforeEach(() => {
    actions = {
      toLogin: jest.fn(),
    };
    store = new Vuex.Store({
      actions,
    });
  });
  it("Форма не сабмитится при пустых полях", () => {
    const wrapper = shallowMount(login, { store, localVue });
    const form = wrapper.find(".authorization");
    const inputLogin = wrapper.find(".login-input");
    const inputPass = wrapper.find(".password-input");

    inputLogin.setValue("");
    inputPass.setValue("");
    form.trigger("submit");

    expect(actions.toLogin).not.toHaveBeenCalled();
  });
});
