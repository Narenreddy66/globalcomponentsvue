<template>
  <div class="card shadow mt-3">
    <table class="table table-bordered w-100 mt-5">
      <thead>
        <tr>
          <th scope="col">S.no</th>
          <th scope="col">
            <input
              type="text"
              v-model="filters.name"
              class="form-control"
              placeholder="Search Name"
            />
          </th>
          <th scope="col">
            <input
              type="text"
              v-model="filters.email"
              class="form-control"
              placeholder="Search Email"
            />
          </th>
          <th scope="col">
            <input
              type="text"
              v-model="filters.idNo"
              class="form-control"
              placeholder="Search Id.no"
            />
          </th>
          <th scope="col">
            <input
              type="text"
              v-model="filters.status"
              class="form-control"
              placeholder="Search Status"
            />
          </th>
          <th scope="col">
            <input
              type="text"
              v-model="filters.dateOfJoining"
              class="form-control"
              placeholder="Search Date Of Joining"
            />
          </th>
          <th scope="col">
            <input
              type="text"
              v-model="filters.mobileNo"
              class="form-control"
              placeholder="Search Mobile No"
            />
          </th>
        </tr>
        <tr class="mt-3">
          <th scope="col">S.no</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Id.No</th>
          <th scope="col">Status</th>
          <th scope="col">Date of Joining</th>
          <th scope="col">Mobile_no</th>
          <th scope="col">File Uploading</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(employee, index) in paginatedData" :key="index">
          <td>{{ (currentPage - 1) * itemsPerPage + index + 1 }}</td>
          <td>{{ employee.employee_name }}</td>
          <td>{{ employee.personal_email }}</td>
          <td>{{ employee.name }}</td>
          <td>{{ employee.status }}</td>
          <td>{{ employee.date_of_joining }}</td>
          <td>{{ employee.cell_number }}</td>
          <td>
            <div>
              <button
                type="button"
                class="btn btn-danger text-nowrap text-white"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <i class="ri-arrow-up-line"></i> Upload File
              </button>
            </div>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="7 mt-1">
            <nav aria-label="Page navigation">
              <ul class="pagination justify-content-start ps-3">
                <li class="page-item" :class="{ disabled: currentPage === 1 }">
                  <a
                    class="page-link"
                    href="#"
                    aria-label="Previous"
                    @click.prevent="setPage(currentPage - 1)"
                  >
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li
                  v-for="pageNumber in totalPages"
                  :key="pageNumber"
                  class="page-item"
                  :class="{ active: currentPage === pageNumber }"
                >
                  <a
                    class="page-link"
                    href="#"
                    @click.prevent="setPage(pageNumber)"
                    >{{ pageNumber }}</a
                  >
                </li>
                <li
                  class="page-item"
                  :class="{ disabled: currentPage === totalPages }"
                >
                  <a
                    class="page-link"
                    href="#"
                    aria-label="Next"
                    @click.prevent="setPage(currentPage + 1)"
                  >
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </td>
        </tr>
      </tfoot>
    </table>
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Upload Image</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              @click="closeUploadDialog"
            ></button>
          </div>
          <div class="modal-body">
            <input type="file" @change="previewFile" />
            <img v-if="previewUrl" :src="previewUrl" width="100%" />
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-danger text-white"
              @click="save"
            >
              Save
            </button>
            <button
              type="button"
              class="btn btn-danger text-white"
              data-bs-dismiss="modal"
              @click="closeUploadDialog"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axiosInstance from "../shared/apiInterceptor";
import { apiUrls, Doctypes } from "../shared/apiUrls";
// const csrfToken = document
//   .querySelector('meta[name="csrf-token"]')
//   .getAttribute("content");
export default {
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 1,
      Logout: "Logout",
      employeeData: [],
      filters: {
        name: "",
        email: "",
        idNo: "",
        status: "",
        dateOfJoining: "",
        mobileNo: "",
      },
      selectedFile: null,
      previewUrl: null,
    };
  },
  mounted() {
    this.fetchData();
  },
  computed: {
    filteredEmployees() {
      return this.employeeData.filter((employee) => {
        return (
          employee.employee_name
            .toLowerCase()
            .includes(this.filters.name.toLowerCase()) &&
          employee.personal_email
            .toLowerCase()
            .includes(this.filters.email.toLowerCase()) &&
          employee.name.toString().includes(this.filters.idNo) &&
          // employee.docstatus.toLowerCase().includes(this.filters.status.toLowerCase()) &&
          employee.date_of_joining.includes(this.filters.dateOfJoining) &&
          employee.cell_number.includes(this.filters.mobileNo)
        );
      });
    },

    totalPages() {
      return Math.ceil(this.filteredEmployees.length / this.itemsPerPage);
    },

    startIndex() {
      return (this.currentPage - 1) * this.itemsPerPage;
    },
    endIndex() {
      return Math.min(
        this.startIndex + this.itemsPerPage - 1,
        this.filteredEmployees.length - 1
      );
    },

    paginatedData() {
      return this.filteredEmployees.slice(this.startIndex, this.endIndex + 1);
    },
  },
  methods: {
    setPage(pageNumber) {
      this.currentPage = pageNumber;
    },
    previewFile(event) {
      const file = event.target.files[0];
      if (file) {
        this.selectedFile = file;
        const reader = new FileReader();
        reader.onload = () => {
          this.previewUrl = reader.result;
        };
        reader.readAsDataURL(file);
      }
    },
    save() {
      this.closeUploadDialog();
    },

    handleFileUpload() {
      this.file = this.$refs.fileInput.files[0];
    },
    uploadFile() {
      const formData = new FormData();
      formData.append("file", this.file);

      axiosInstance
        .post("/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log(response.data);
          alert("File uploaded successfully!");
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("An error occurred while uploading the file");
        });
    },
    fetchData() {
      let queryParams = { filters: [] };
      queryParams.fields = JSON.stringify(["*"]);
      queryParams.limit_page_length = "none";
      axiosInstance
        .get(apiUrls.resource + "/" + Doctypes.employee, {
          params: queryParams,
          // headers: {
          //   "X-CSRFToken": csrfToken,
          // },
        })
        .then((res) => {
          console.log(res);
          this.employeeData = res.data;
          console.log(this.employeeData, "naren");
        });
    },
  },
};
</script>

<style scoped>
.table {
  width: 100% !important;
  border-radius: 10px;
}
#formFile::before {
  content: "Upload file";
  position: absolute;
  z-index: 2;
  display: block;
  background-color: #eee;
  width: 80px;
}
</style>
