import { $$ } from '../../../../src/utils/Dom';
import { MLFacetHeader } from '../../../../src/ui/MLFacet/MLFacetHeader/MLFacetHeader';
import { MLFacet, IMLFacetOptions } from '../../../../src/ui/MLFacet/MLFacet';

export function MLFacetHeaderTest() {
  describe('MLFacetHeader', () => {
    let mLFacetHeader: MLFacetHeader;
    let baseOptions: IMLFacetOptions;

    beforeEach(() => {
      baseOptions = {
        title: 'Best facet'
      };
      initializeComponent();
    });

    function initializeComponent() {
      mLFacetHeader = new MLFacetHeader({ options: baseOptions } as MLFacet);
    }

    it('should create an accessible title', () => {
      const titleElement = $$(mLFacetHeader.element).find('.coveo-ml-facet-header-title');

      expect($$(titleElement).getAttribute('aria-label')).toBeTruthy();
      expect($$(titleElement).find('span').innerHTML).toBe(baseOptions.title);
    });

    it('should create a hidden waitAnimationElement', () => {
      const waitAnimationElement = $$(mLFacetHeader.element).find('.coveo-ml-facet-header-wait-animation');
      expect($$(waitAnimationElement).isVisible()).toBe(false);
    });

    it(`when calling showLoading
      waitAnimationElement show be visible after the delay`, done => {
      const waitAnimationElement = $$(mLFacetHeader.element).find('.coveo-ml-facet-header-wait-animation');
      mLFacetHeader.showLoading();
      expect($$(waitAnimationElement).isVisible()).toBe(false);

      setTimeout(() => {
        expect($$(waitAnimationElement).isVisible()).toBe(true);
        done();
      }, MLFacetHeader.showLoadingDelay + 1);
    });

    it('should create an hidden clear button', () => {
      const clearElement = $$(mLFacetHeader.element).find('.coveo-ml-facet-header-clear');

      expect($$(clearElement).isVisible()).toBe(false);
    });

    it(`when calling showClear
      the clear button should be visible`, () => {
      const clearElement = $$(mLFacetHeader.element).find('.coveo-ml-facet-header-clear');

      mLFacetHeader.toggleClear(true);

      expect($$(clearElement).isVisible()).toBe(true);
    });

    it(`when passing the option enableCollapse (true)
      should display the accessible collapse & expand buttons`, () => {
      baseOptions.enableCollapse = true;
      initializeComponent();

      const collapseElement = $$(mLFacetHeader.element).find('.coveo-ml-facet-header-collapse');
      const expandElement = $$(mLFacetHeader.element).find('.coveo-ml-facet-header-expand');

      expect(collapseElement).toBeTruthy();
      expect(expandElement).toBeTruthy();
    });
  });
}