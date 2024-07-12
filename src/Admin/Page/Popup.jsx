import React from "react";

const Popup = () => {
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Thông tin chi tiết thực tập
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="d-flex">
                <div className="text-center mb-3  ms-3">
                  <img
                    src="data:image/jpeg;base64,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"
                    className="rounded-circle"
                    alt="User"
                    style={{ width: "100px", height: "100px" }}
                  />
                </div>
                <ul className="list-unstyled ms-5">
                  <li className="mb-4">
                    <strong>Tên thực tập:</strong> 1234
                  </li>
                  <li className="mb-4">
                    <strong>Mã thực tập:</strong> 123123
                  </li>
                  <li className="mb-4">
                    <strong>Email thực tập:</strong> string@gmail.com
                  </li>
                  <li className="mb-4">
                    <strong>Giới tính:</strong> Nam
                  </li>
                  <li className="mb-4">
                    <strong>Ngày sinh:</strong> 19/06/2024
                  </li>
                  <li>
                    <strong>Số điện thoại:</strong> 12312313232
                  </li>
                </ul>
                <div className="ms-auto">
                  <h5 className="mb-3">Hành động</h5>
                  <button type="button" className="btn btn-warning mb-2 w-100">
                    Sửa Thông Tin
                  </button>
                  <button type="button" className="btn btn-primary w-100">
                    Thêm Kĩ Năng
                  </button>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
