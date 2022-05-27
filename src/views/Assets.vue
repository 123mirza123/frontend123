<template>
  <section class="section">
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">
            <div style="overflow-x:auto;">
            <h5 class="card-title">Datatables</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              sed repellat asperiores debitis tenetur consequatur aliquam omnis,
              at quibusdam, totam suscipit ab optio nihil dolorem nostrum
              corporis quia animi unde.
            </p>
            
            <div
              class="
                dataTable-wrapper dataTable-loading
                no-footer
                sortable
                searchable
                fixed-columns
              "
            >
              <div class="dataTable-top">
                <div class="dataTable-search">
                  <input
                    class="dataTable-input"
                    placeholder="Search..."
                    type="text"
                  />

                  <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#basicModal"
                    style="margin-left: 10px"
                  >
                    Add new asset
                  </button>
                </div>
              </div>
              <div class="dataTable-container"  style="font-size:1vw;">
                <table class="table datatable dataTable-table">
                  <thead>
                    <tr>
                      <th scope="col" data-sortable="" style="width: 11%">
                        <a href="#" class="dataTable-sorter">Asset category</a>
                      </th>
                      <th scope="col" data-sortable="" style="width: 15%">
                        <a href="#" class="dataTable-sorter">Asset type</a>
                      </th>
                      <th scope="col" data-sortable="" style="width: 10%">
                        <a href="#" class="dataTable-sorter">Vendor</a>
                      </th>
                      <th scope="col" data-sortable="" style="width: 10%">
                        <a href="#" class="dataTable-sorter">Asset name</a>
                      </th>
                      <th scope="col" data-sortable="" style="width: 6%">
                        <a href="#" class="dataTable-sorter">Price</a>
                      </th>
                      <th scope="col" data-sortable="" style="width: 12%">
                        <a href="#" class="dataTable-sorter"
                          >Depreciation type</a
                        >
                      </th>
                      <th scope="col" data-sortable="" style="width: 10%">
                        <a href="#" class="dataTable-sorter">Purchase date</a>
                      </th>
                      <th scope="col" data-sortable="" style="width: 14%">
                        <a href="#" class="dataTable-sorter"
                          >Warranty expiry date</a
                        >
                      </th>
                      <th scope="col" data-sortable="" style="width: 11%">
                        <a href="#" class="dataTable-sorter">Purchase type</a>
                      </th>
                      <th scope="col" data-sortable="" style="width: 10%"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Namjestaj</th>
                      <td>Krevet</td>
                      <td>Bellona</td>
                      <td>Bracni krevet</td>
                      <td>5200$</td>
                      <td></td>
                      <td>2014-12-05</td>
                      <td>2016-12-05</td>
                      <td>Owned</td>
                      <td>
                        <button type="button" class="btn btn-primary btn-sm"  style="font-size:1vw;">
                          Edit
                        </button>
                      </td>
                      <td>
                        <button type="button" class="btn btn-outline-danger btn-sm"  style="font-size:1vw;">Delete</button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Namjestaj</th>
                      <td>Krevet</td>
                      <td>Bellona</td>
                      <td>Bracni krevet</td>
                      <td>500$</td>
                      <td></td>
                      <td>2014-12-05</td>
                      <td>2016-12-05</td>
                      <td>Owned</td>
                      <td>
                        <button type="button" class="btn btn-primary btn-sm"  style="font-size:1vw;">
                          Edit
                        </button>
                      </td>
                      <td>
                        <button type="button" class="btn btn-outline-danger btn-sm"  style="font-size:1vw;">Delete</button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Namjestaj</th>
                      <td>Krevet</td>
                      <td>Bellona</td>
                      <td>Bracni krevet</td>
                      <td>500$</td>
                      <td></td>
                      <td>2014-12-05</td>
                      <td>2016-12-05</td>
                      <td>Owned</td>
                      <td>
                        <button type="button" class="btn btn-primary btn-sm"  style="font-size:1vw;">
                          Edit
                        </button>
                      </td>
                      <td>
                        <button type="button" class="btn btn-outline-danger btn-sm"  style="font-size:1vw;">Delete</button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Namjestaj</th>
                      <td>Krevet</td>
                      <td>Bellona</td>
                      <td>Bracni krevet</td>
                      <td>500$</td>
                      <td></td>
                      <td>2014-12-05</td>
                      <td>2016-12-05</td>
                      <td>Owned</td>
                      <td>
                        <button type="button" class="btn btn-primary btn-sm"  style="font-size:1vw;">
                          Edit
                        </button>
                      </td>
                      <td>
                        <button type="button" class="btn btn-outline-danger btn-sm"  style="font-size:1vw;">Delete</button>
                      </td>
                    </tr>

                    <tr>
                      <th scope="row">Namjestaj</th>
                      <td>Krevet</td>
                      <td>Bellona</td>
                      <td>Bracni krevet</td>
                      <td>500$</td>
                      <td></td>
                      <td>2014-12-05</td>
                      <td>2016-12-05</td>
                      <td>Owned</td>
                      <td>
                        <button type="button" class="btn btn-primary btn-sm"  style="font-size:1vw;">
                          Edit
                        </button>
                      </td>
                      <td>
                        
                        <button type="button" class="btn btn-outline-danger btn-sm"  style="font-size:1vw;">Delete</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="dataTable-bottom">
                <div class="dataTable-info">Showing 1 to 5 of 5 entries</div>
                <nav class="dataTable-pagination">
                  <ul class="dataTable-pagination-list"></ul>
                </nav>
              </div>
              <ul class="pagination justify-content-center"><li class="page-item disabled"> <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a></li><li class="page-item"><a class="page-link" href="#">1</a></li><li class="page-item"><a class="page-link" href="#">2</a></li><li class="page-item"><a class="page-link" href="#">3</a></li><li class="page-item"> <a class="page-link" href="#">Next</a></li></ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </section>
</template>
<script>


import Modal from '@/components/Modal.vue'
</script>
<style>
@media (min-width: none) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
