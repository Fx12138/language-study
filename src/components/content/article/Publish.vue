<template>
  <div class="box">
    <el-dialog
      title="发表文章"
      :visible.sync="dialogFormVisible"
      append-to-body
    >
      <el-form :model="form">
        <el-form-item label="文章标题" :label-width="formLabelWidth">
          <el-input
            v-model="form.name"
            autocomplete="off"
            style="width: 300px"
          ></el-input>
        </el-form-item>
        <el-form-item label="文章分类" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择文章分类">
            <el-option label="英语" value="english"></el-option>
            <el-option label="日语" value="japanese"></el-option>
            <el-option label="韩语" value="korean"></el-option>
            <el-option label="俄语" value="russian"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button
          @click="
            dialogFormVisible = false;
            $emit('dialogFormVisible', dialogFormVisible);
          "
          >取 消</el-button
        >
        <el-button type="primary" @click="publish">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialogFormVisible: true,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      formLabelWidth: "120px",
    };
  },
  methods: {
    init() {},
    publish() {
      this.dialogFormVisible = false;
      this.$emit("dialogFormVisible", this.dialogFormVisible);
    },
  },
  components: {},
  created() {},
  mounted() {
    this.init();
  },
};
</script>
<style lang="less">
</style>