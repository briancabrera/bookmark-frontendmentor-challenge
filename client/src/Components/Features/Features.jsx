import React from 'react'
import "./features.scss"

export default function () {
  return (
    <section className="features">
        <div className="wrapper">
            <h2>Features</h2>
            <p>
                Our aim is to make it quick and easy for you to access your favourite websites.
                Your bookmarks sync between your devices so you can access them on the go.
            </p>
            <div className="tabs">
                <input type="radio" name="tab" value="bookmarking" id="bookmarking" checked/>
                <input type="radio" name="tab" value="searching" id="searching" />
                <input type="radio" name="tab" value="sharing" id="sharing" />
                <ul>
                    <li className="link">
                        <label for="bookmarking">
                            Simple Bookmarking
                        </label>
                    </li>
                    <li className="link">
                        <label for="searching">
                            Speedy Searching
                        </label>
                    </li>
                    <li className="link">
                        <label for="sharing">
                            Easy Sharing
                        </label>
                    </li>
                </ul>
                <div className="grid">
                    <div className="content" id="bookmarking">
                        <img src="../../images/illustration-features-tab-1.svg" alt="" />
                        <div>
                            <h2>Bookmark in one click</h2>
                            <p>
                                Organize your bookmarks however you like. Our simple drag-and-drop interface
                                gives you complete control over how you manage your favourite sites.
                            </p>
                        </div>
                        <button class="btn">More Info</button>
                    </div>
                    <div className="content" id="searching">
                        <img src="../../images/illustration-features-tab-2.svg" alt="" />
                        <div>
                            <h2>Intelligent search</h2>
                            <p>  
                                Our powerful search feature will help you find saved sites in no time at all.
                                No need to trawl through all of your bookmarks.            
                            </p>
                            <button class="btn">More Info</button>
                        </div>
                    </div>
                    <div className="content" id="sharing">
                        <img src="../../images/illustration-features-tab-3.svg" alt="" />
                        <div>
                            <h2>Share your bookmarks</h2>
                            <p>                        
                                Easily share your bookmarks and collections with others. Create a shareable
                                link that you can send at the click of a button.            
                            </p>
                            <button class="btn">More Info</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
