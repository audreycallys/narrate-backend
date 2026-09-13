import { Request, Response } from "express";
import { db } from "../../config/db";
import { categoriesTable } from "../../config/schema";
import { asc, eq } from "drizzle-orm";
import { categoryIdSchema } from "../../validations/categories/category.validation";

export class CategoriesController {
  // Membaca Semua Category
  getCategories = async (req: Request, res: Response) => {
    try {
      const categories = await db
        .select()
        .from(categoriesTable)
        .orderBy(asc(categoriesTable.name));

      return res.status(200).json({
        success: true,
        message: "Get Categories Successfully",
        data: {
          categories: categories,
        },
      });
    } catch (error) {
      console.error("Get categories error:", error);

      return res.status(500).json({
        success: false,
        message: "Terjadi kesalahan pada server",
        error: error instanceof Error ? error.message : error,
      });
    }
  };

  // Membaca Category Berdasarkan Id
  getCategoryById = async (req: Request, res: Response) => {
    try {
      const validatedParams = categoryIdSchema.parse(req.params);
      const { id } = validatedParams;

      const [category] = await db
        .select()
        .from(categoriesTable)
        .where(eq(categoriesTable.id, id));

      if (!category) {
        return res.status(404).json({
          success: false,
          message: "Category Not Found",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Category retrieved successfully",
        data: {
          category: category,
        },
      });
    } catch (error) {
      console.error("Get category by id error:", error);

      return res.status(500).json({
        success: false,
        message: "Terjadi kesalahan pada server",
        error: error instanceof Error ? error.message : error,
      });
    }
  };
}

export default new CategoriesController();
