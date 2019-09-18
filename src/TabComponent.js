import React from "react";
import Button from "@material-ui/core/Button";
import "./TabComponent.css";
import Tabs from "./Tabs";
import Tooltip from "@material-ui/core/Tooltip";
require("./styles.css");

function TabComponent() {
  return (
    <div className="body">
      <h2
        aria-required="true"
        tabindex="0"
        aria-label="My happy garden A-Line Dress"
      >
        My happy garden A-Line Dress
      </h2>
      <h4 tabindex="0">Designed by Krusidull</h4>
      <div className="component">
        <Tabs>
          <div className="tab-content" label="Features">
            <h4 aria-label={"Features"}>Features</h4>
            <ul>
              <li>Loose swing shape for an easy, flowy fit</li>
              <li>
                Print covers entire front and back panel with your chosen
                design, by an independent artist
              </li>
              <li>
                97% polyester, 3% elastane woven dress fabric with silky
                handfeel
              </li>
              <li>
                Note that due to the production process, the placement of the
                print may vary slightly from the preview
              </li>
              <li>A-Line dresses are made in the USA</li>
            </ul>
            <div className="moreFeatures">
              <a
                href="https://www.redbubble.com/people/krusidull/works/41007417-my-happy-garden?cat_context=w-dresses&grid_pos=2&p=a-line-dress&rbs=cc22dd2c-0952-4394-8a5c-9299cc18a6d9&ref=shop_grid"
                target="_blank"
                aria-label="this link will redirct to a new page showing more features of the item"
              >
                See all features >
              </a>
            </div>
          </div>
          <div label="Reviews" aria-label="Reviews">
            <h4>Reviews</h4>
          </div>
          <div label="Comments" aria-label="Comments">
            <h4>Comments</h4>
          </div>
          <div label="Tab3">
            <h4>This is Tab 3</h4>
          </div>
          <div label="Tab4">
            <h4>This is Tab 4</h4>
          </div>

          <Button
            id="btn"
            label="Disabled"
            className="disabledTab"
            aria-label="This tab is currently disabled for you"
          >
            Some moreeee text
          </Button>

          <div label="Tab5">
            <h4>This is Tab 5</h4>
          </div>
        </Tabs>
      </div>
    </div>
  );
}

const container = document.createElement("div");
document.body.appendChild(container);

export default TabComponent;
