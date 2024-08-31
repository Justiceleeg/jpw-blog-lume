export default ({ comp }: Lume.Data) => (
  <div className="neutral-border border-t">
    <div className="max-w-screen-lg m-auto">
      {/* <div className="flex justify-center w-full"> */}
      <div>
        <footer>
          <div className="w-full">
            <div>
              <a href="/" title="Home">
                logo
              </a>
              <comp.SocialList />
            </div>
            <div>
              <div>© {new Date().getFullYear()}, Justice P White</div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  </div>
);
