import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormAddProduct = () => {
  const [name, setName] = useState("");
  const [jabatan, setJabatan] = useState("");
  const [gaji, setGaji] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const saveProduct = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/products", {
        name: name,
        jabatan: jabatan,
        gaji:gaji,
      });
      navigate("/products");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div>
      <h1 className="title">Karyawan</h1>
      <h2 className="subtitle">Add New Karyawan</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={saveProduct}>
              <p className="has-text-centered">{msg}</p>
              <div className="field">
                <label className="label">Nama Lengkap</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nama Lengkap"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Jabatan</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={jabatan}
                    onChange={(e) => setJabatan(e.target.value)}
                    placeholder="Jabatan"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Gaji</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={gaji}
                    onChange={(e) => setGaji(e.target.value)}
                    placeholder="Gaji"
                  />
                </div>
              </div>

              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-success">
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormAddProduct;
