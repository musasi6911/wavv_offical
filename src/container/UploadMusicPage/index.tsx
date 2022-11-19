import React from "react";
import style from "./index.module.css";
import Upload from "components/Upload";
import classnames from "classnames/bind";

const cx = classnames.bind(style);

const UploadPage: React.FC = () => {
  const [copyrightVal, setCopyrightVal] = React.useState<number>(0);
  return (
    <>
      <Upload />
      <div className={cx("content")}>
        {/* <!-- Main Content Area start --> */}
        <div className={cx("composer-out")}>
          <h1>Upload Your Music</h1>

          <div className={cx("composer-main")}>
            <div className={cx("img-upload-block")}>
              <div className={cx("file-upload-block")}>
                <label htmlFor="file-upload" className={cx("file-upload-btn")}>
                  Choose Music File
                </label>
                <input
                  type="file"
                  id="file-upload"
                  style={{ display: "none" }}
                />
                <p>File Name...</p>
              </div>
              <label htmlFor="img-upload-input" className={cx("img-upload")}>
                <i className={cx("bi bi-card-image")}></i>
                <p>
                  Choose a cover image to
                  <br />
                  upload for the song
                </p>
                <img id="show-img" src="#" style={{ display: "none" }} />
              </label>
              <input
                type="file"
                id="img-upload-input"
                style={{ display: "none" }}
              />
            </div>

            <div className={cx("composer-data")}>
              <h3>Music Title</h3>
              <input type="text" placeholder="Your Music Title..." />
              <h3>Music Description</h3>
              <textarea
                name=""
                id=""
                placeholder="Some Description..."
              ></textarea>
              <h3>Fractional Copyright</h3>
              <div className={cx("up-copyright")}>
                <p>What percentage of the song’s copyright do you own?</p>
                <input
                  type="range"
                  value={copyrightVal}
                  min="0"
                  max="100"
                  onChange={(e) => setCopyrightVal(Number(e.target.value))}
                />
                <h4>0</h4>
              </div>
            </div>
          </div>

          <button className={cx("composer-send")}>Upload Music</button>
        </div>
      </div>
    </>
  );
};

export default UploadPage;
