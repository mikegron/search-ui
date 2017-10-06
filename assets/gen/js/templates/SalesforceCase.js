Coveo.TemplateCache.registerTemplate("CardSalesforceCase", Coveo.HtmlTemplate.fromString("<div class=\"coveo-result-frame\">\n  <div class=\"coveo-result-row\">\n    <div class=\"coveo-result-cell\">\n      <div class=\"coveo-result-row\">\n        <div class=\"coveo-result-cell\" style=\"width: 32px; vertical-align: middle;\">\n          <div class=\"CoveoIcon\" data-small=\"true\" data-with-label=\"false\">\n          </div>\n        </div>\n        <div class=\"coveo-result-cell\" style=\"text-align:left; padding-left: 10px; vertical-align: middle;\">\n          <a class=\"CoveoResultLink\"></a>\n        </div>\n      </div>\n      <div class=\"coveo-result-row\" style=\"padding-top:10px; padding-bottom:10px\">\n        <div class=\"coveo-result-cell\">\n          <span class=\"CoveoFieldValue\"\n                data-field=\"@objecttype\"\n                data-helper=\"translatedCaption\"\n                style=\"border: 1px solid #BCC3CA; border-radius: 3px; padding: 2px 10px;\n                       text-transform: uppercase; font-weight: bold; font-size: 9px\"></span>\n        </div>\n        <div class=\"coveo-result-cell\">\n          <span class=\"CoveoText\" data-value=\"#\"></span><span class=\"CoveoFieldValue\" data-field=\"@sfcasenumber\"></span>\n        </div>\n      </div>\n      <div class=\"coveo-result-row\">\n        <div class=\"coveo-result-cell\" style=\"padding-top:5px; padding-bottom:5px\">\n          <div class=\"CoveoText\" data-value=\"Description\" data-weight=\"bold\"></div>\n          <span class=\"CoveoExcerpt\">\n          </span>\n        </div>\n      </div>\n      <div class=\"coveo-result-row\">\n        <div class=\"coveo-result-cell\">\n          <div class=\"CoveoText\" data-value=\"Owner\" data-weight=\"bold\"></div>\n          <div class=\"CoveoFieldValue\" data-field=\"@sfownername\"></div>\n        </div>\n        <div class=\"coveo-result-cell\">\n          <div class=\"CoveoText\" data-value=\"Priority\" data-weight=\"bold\"></div>\n          <div class=\"CoveoFieldValue\" data-field=\"@sfcasepriority\"></div>\n        </div>\n      </div>\n      <div class=\"coveo-result-row\">\n        <div class=\"coveo-result-cell\">\n          <div class=\"CoveoText\" data-value=\"Modified\" data-weight=\"bold\"></div>\n          <span class=\"CoveoFieldValue\" data-field=\"@date\" data-helper=\"date\">\n          </span>\n        </div>\n      </div>\n      <div class=\"coveo-result-row\">\n        <div class=\"coveo-result-cell\" style=\"padding-top:5px; padding-bottom:5px\">\n          <span class=\"CoveoPrintableUri\">\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"CoveoCardActionBar\">\n    <div class=\"CoveoCardOverlay\" data-title=\"Details\" data-icon=\"search\">\n      <table class=\"CoveoFieldTable\" data-allow-minimization=\"false\">\n        <tbody>\n          <tr data-field=\"@sffcaseid\" data-caption=\"Subject\">\n          </tr>\n          <tr data-field=\"@sfcasesubject\" data-caption=\"Subject\">\n          </tr>\n          <tr data-field=\"@sfcasenumber\" data-caption=\"Case Number\">\n          </tr>\n          <tr data-field=\"@sfcasepriority\" data-caption=\"Priority\">\n          </tr>\n          <tr data-field=\"@sfcaseorigin\" data-caption=\"Origin\">\n          </tr>\n          <tr data-field=\"@sfaccountname\" data-caption=\"Account Name\">\n          </tr>\n          <tr data-field=\"@sfowner\" data-caption=\"Owner\">\n          </tr>\n          <tr data-field=\"@sfcasestatus\" data-caption=\"Status\">\n          </tr>\n          <tr data-field=\"@sfcontactname\" data-caption=\"Contact\">\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n",{"condition":null,"layout":"card","fieldsToMatch":[{"field":"sfcaseid"}],"mobile":null,"role":null}),true, true)
Coveo.TemplateCache.registerTemplate("SalesforceCaseComment", Coveo.HtmlTemplate.fromString("<div class=\"coveo-result-frame\" style=\"padding:0 16px 16px 0;\">\n  <div class=\"coveo-result-cell\" style=\"vertical-align: top;width: 46px;text-align:right;\">\n    <span class=\"CoveoIcon\" data-small=\"true\" data-with-label=\"false\"></span>\n    <div class=\"CoveoQuickview\"></div>\n  </div>\n  <div class=\"coveo-result-cell\" style=\"vertical-align: top; padding-left: 16px;\">\n    <div class=\"coveo-result-row\" style=\"margin-top:0;\">\n      <div class=\"coveo-result-cell coveo-no-wrap\" style=\"vertical-align: top; font-size: 16px;\">\n        <a class=\"CoveoResultLink\" data-title-template=\"# ${raw.sfcasecasenumber}\"></a>\n      </div>\n      <div class=\"coveo-result-cell\" style=\"width:120px;text-align:right;font-size:12px\">\n        <span class=\"CoveoFieldValue\" data-field=\"@date\" data-helper=\"date\">\n        </span>\n      </div>\n    </div>\n    <div class=\"coveo-result-row\" style=\"margin-top:10px;\">\n      <div class=\"coveo-result-cell\">\n        <span class=\"CoveoExcerpt\"></span>\n      </div>\n    </div>\n    <div class=\"coveo-result-row\" style=\"margin-top:8px;\">\n      <div class=\"coveo-result-cell coveo-no-wrap\" style=\"vertical-align: top; font-size: 12px;\">\n        <span class=\"CoveoFieldValue\" data-field=\"@sfcreatedbyname\" data-text-caption=\"From\" style=\"margin-right:30px;\"></span>\n        <span class=\"CoveoFieldValue\" data-field=\"@objecttype\" data-text-caption=\"Type\" style=\"margin-right:30px;\"></span>\n      </div>\n    </div>\n  </div>\n</div>",{"condition":null,"layout":"list","fieldsToMatch":[{"field":"objecttype","values":["CaseComment"]}],"mobile":null,"role":null}),true, true)
Coveo.TemplateCache.registerTemplate("SalesforceCase", Coveo.HtmlTemplate.fromString("<div class=\"coveo-result-frame\">\n  <div class=\"coveo-result-cell\" style=\"vertical-align:top;text-align:center;width:32px;\">\n    <span class=\"CoveoIcon\" data-small=\"true\" data-with-label=\"false\"></span>\n    <div class=\"CoveoQuickview\"></div>\n  </div>\n  <div class=\"coveo-result-cell\" style=\"vertical-align: top;padding-left: 16px;\">\n    <div class=\"coveo-result-row\" style=\"margin-top:0;\">\n      <div class=\"coveo-result-cell coveo-no-wrap\" style=\"vertical-align:top;font-size:16px;\">\n        <a class=\"CoveoResultLink\" data-title-template=\"${title} - ${raw.sfcasenumber}\"></a>\n      </div>\n      <div class=\"coveo-result-cell\" style=\"width:120px;text-align:right;font-size:12px\">\n        <div class=\"coveo-result-row\">\n          <span class=\"CoveoFieldValue\" data-field=\"@date\" data-helper=\"date\"></span>\n        </div>\n      </div>\n    </div>\n    <div class=\"coveo-result-row\" style=\"margin-top:10px;\">\n      <div class=\"coveo-result-cell\">\n        <span class=\"CoveoExcerpt\"></span>\n      </div>\n    </div>\n    <div class=\"coveo-result-row\" style=\"margin-top:10px;\">\n      <div class=\"coveo-result-cell\">\n        <span class=\"CoveoFieldValue\" data-field=\"@sfpriority\" data-text-caption=\"Priority\" style=\"margin-right:30px;\"></span>\n        <span class=\"CoveoFieldValue\" data-field=\"@sfstatus\" data-text-caption=\"Status\" style=\"margin-right:30px;\"></span>\n        <span class=\"CoveoFieldValue\" data-field=\"@sforigin\" data-text-caption=\"Origin\" style=\"margin-right:30px;\"></span>\n      </div>\n    </div>\n    <div class=\"coveo-result-row\" style=\"margin-top:10px;\">\n      <div class=\"coveo-result-cell\">\n        <table class=\"CoveoFieldTable\" data-minimized-by-default=\"true\">\n            <tbody>\n              <tr data-field=\"@sfownername\" data-caption=\"Owner\"></tr>\n              <tr data-field=\"@sfaccountname\" data-caption=\"Account\"></tr>\n              <tr data-field=\"@sfowner\" data-caption=\"Owner\"></tr>\n              <tr data-field=\"@sfcontactname\" data-caption=\"Contact\"></tr>\n            </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>",{"condition":null,"layout":"list","fieldsToMatch":[{"field":"sfcaseid"}],"mobile":null,"role":null}),true, true)