import "./footer.css";

export default function Footer() {
    const year = new Date().getFullYear();
    
    return (
      <footer class="Footer">
        <p>{`© ${year} Brendan Smyers, All rights reserved.`}</p>
      </footer>
    );
}