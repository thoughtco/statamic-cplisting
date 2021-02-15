export default {
  data() {
    return {
      deletingRow: false,
    };
  },

  computed: {
    deletingModalTitle() {
      return this.deletingModalTitleFromRowKey("source");
    },
  },

  methods: {
    confirmDeleteRow(id, index) {
      this.deletingRow = { id, index };
    },

    deletingModalTitleFromRowKey(key) {
      return __("Delete") + " " + this.rows[this.deletingRow.index][key];
    },

    deleteRow(resourceRoute, message) {
      const id = this.deletingRow.id;
      message = message || __("Deleted");

      this.$axios
        .delete(cp_url(`${resourceRoute}/${id}`))
        .then(() => {
          let i = _.indexOf(this.rows, _.findWhere(this.rows, { id }));
          this.rows.splice(i, 1);
          this.deletingRow = false;
          this.$toast.success(message);

          location.reload();
        })
        .catch((e) => {
          this.$toast.error(
            e.response ? e.response.data.message : __("Something went wrong")
          );
        });
    },

    cancelDeleteRow() {
      this.deletingRow = false;
    },
  },
};