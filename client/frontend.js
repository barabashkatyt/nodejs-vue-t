import Vue from "https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.js";

new Vue({
  el: "#app",
  data() {
    return {
      form: {
        name: "",
        value: "",
      },
      contacts: [
        { id: 1, name: "Vasili", value: "456654654654", marked: false },
      ],
    };
  },
  computed: {
    canCreate() {
      return this.form.name.trim() && this.form.value.trim();
    },
  },
  methods: {
    createContact() {
      const { ...contact } = this.form;
      this.form.name = this.form.value = "";
      this.contacts.push({ ...contact, id: Date.now() });
    },
    markContact(id) {
      const contact = this.contacts.find((c) => c.id === id);
      contact.marked = true;
    },
    removeContact(id) {},
  },
});
