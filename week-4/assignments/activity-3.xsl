<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <body>
                <h2>Products</h2>
                <table border="3">
                    <tr bgcolor="#FFFF00">
                        <th>Product name</th>
                        <th>Manufacturer ID</th>
                        <th>Description</th>
                        <th>Prices</th>
                        <th>Product Items</th>
                    </tr>
                    <xsl:for-each select="products/product">
                        <tr bgcolor="#d8d8d8">
                            <td>
                                <xsl:value-of select="productName" />
                            </td>
                            <td>
                                <xsl:value-of select="manufacturer" />
                            </td>
                            <td>
                                <xsl:value-of select="description" />
                            </td>
                            <td>
                                <xsl:value-of select="prices" />
                            </td>
                            <td>
                                <xsl:value-of select="productItems" />
                            </td>
                        </tr>

                    </xsl:for-each>

                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>